import React, { useEffect, useState } from "react"

const useFetch = (url: string) => {
  const [fetchedData, setFetchedDate] = useState({
    data: [],
    isLoading: true,
  })
  const controller = new AbortController()
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },

    signal: controller.signal,
  }
  const fetchingData = async () => {
    try {
      setFetchedDate({
        data: [],
        isLoading: true,
      })
      const response = await fetch(url, options)
      const body = await response.json()
      setFetchedDate({
        data: body,
        isLoading: false,
      })
    } catch (error) {
      console.log(error)

      setFetchedDate({
        data: [],
        isLoading: true,
      })
    }
  }

  useEffect(() => {
    console.log("mounted")
    fetchingData()
    return () => {
      console.log("before unmounted")
    }
  }, [url])

  const { data, isLoading } = fetchedData
  return { data, isLoading }
}

export default useFetch
