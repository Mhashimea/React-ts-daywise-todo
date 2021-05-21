
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import './style.css'
import Slider from 'react-slick'
import classNames from 'classnames'

export default function DatePicker() {
  const [dates, setDates] = useState<any>([])
  const [currentMonth, setCurrentMonth] = useState(moment().format("MMMM"))
  const [currentYear, setCurrentYear] = useState(moment().format("YYYY"))
  const [selectedDate, setSelectedDate] = useState({})
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 15,
    slidesToScroll: 15,
    initialSlide: Number(moment().format('DD')) + 10,
    // nextArrow: <RightCircleOutlined />,
    // prevArrow: <LeftCircleOutlined />
  }

  const generateDate = (month: number, year: number) => {
    let dates = []
    let date = new Date(year, month, 1);
    while (date.getMonth() === month) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    setDates(dates)
  }

  useEffect(() => {
    generateDate(4, 2021)
    setSelectedDate(moment().format('DD'))
  }, [])

  return (
    <div className="date-picker">
      <div className="date-picker__header flex items-center w-full justify-center">
        <LeftCircleOutlined className="text-lg cursor-pointer" />
        <h1 className="mx-3 text-lg">{currentMonth} - {currentYear}</h1>
        <RightCircleOutlined className="text-lg cursor-pointer" />
      </div>
      <div className="date-picker__data flex items-center mt-5">
        <Slider {...sliderSettings}>
          {
            dates.map((date: any, i: any) => {
              return (
                <DateObject date={date} key={i} selectedDate={selectedDate} />
              )
            })
          }
        </Slider>
      </div>
    </div>
  )
}

function DateObject({ date, selectedDate }: any) {
  let dateCls = classNames({
    "font-medium": true,
    " date-picker__date--active": moment(date).format("DD") === selectedDate
  })
  return (
    <div className="date-picker__date cursor-pointer justify-center flex items-center flex-col">
      <span className="text-xs text-gray-500 text-center mb-2">{moment(date).format('ddd')}</span>
      <h1 className={dateCls}>{moment(date).format("DD")}</h1>
    </div>
  )
}