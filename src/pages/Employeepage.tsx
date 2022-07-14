import { ChangeEvent, useState } from "react"
import LineChart from "../components/charts/LineChart"
import CircularLoader from "../components/CircularLoader"
import Dropdown from "../components/Dropdown"
import Header from "../components/Header"
import useFetch from "../hooks/useFetch"

const Employeepage = () => {
  const [year, setYear] = useState("1997")
  const { data, isLoading } = useFetch("http://localhost:8001/api/employees")
  const { data: data2, isLoading: isLoading2 } = useFetch(
    `http://localhost:8001/api/employees-by-year/${year}`
  )
  const labels = ["1997", "1998", "1999", "2000", "2001"]
  const labels2 = ["Q1", "Q2", "Q3", "Q4"]

  const onChangeYear = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    setYear(value)
  }

  return (
    <>
      <Header />
      {isLoading === true || isLoading2 === true ? (
        <CircularLoader />
      ) : (
        <div className="employee__charts">
          <div className="employee__charts__all">
            <LineChart
              data={{
                labels: labels,
                datasets: [
                  {
                    label: "Salary",
                    data: data[0],
                    borderColor: "rgb(255, 99, 132)",
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                    fill: {
                      target: "origin",
                      above: "rgb(255, 0, 0, 0.2)", // Area will be red above the origin
                      below: "rgb(0, 0, 255, 0.2)", // And blue below the origin
                    },
                    tension: 0.3,
                  },
                ],
              }}
            />
          </div>
          <div className="employee__charts__year">
            <Dropdown year={year} onChange={onChangeYear} />
            <LineChart
              data={{
                labels: labels2,
                datasets: [
                  {
                    label: "Salary",
                    data: [
                      data2[0]["quarter_1"],
                      data2[0]["quarter_2"],
                      data2[0]["quarter_3"],
                      data2[0]["quarter_4"],
                    ],
                    borderColor: "rgb(255, 99, 132)",
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                    fill: {
                      target: "origin",
                      above: "rgb(255, 0, 0, 0.2)", // Area will be red above the origin
                      below: "rgb(0, 0, 255, 0.2)", // And blue below the origin
                    },
                    tension: 0.3,
                  },
                ],
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Employeepage
