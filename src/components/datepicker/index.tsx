
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import './style.css'
import Slider from 'react-slick'
import classNames from 'classnames'

export default function DatePicker({ emitDate }: any) {
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
  }

  const generateDate = (month: number, year: number) => {
    let dates = []
    let date = new Date(year, month - 1, 1);
    while (date.getMonth() === month - 1) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    setCurrentMonth(moment(dates[0]).format('MMMM'))
    setCurrentYear(moment(dates[0]).format('YYYY'))
    setSelectedDate(moment(dates[0]).format('DD'))
    setDates(dates)
  }

  const onChangeDate = (e: any) => {
    setSelectedDate(moment(e).format('DD'))
    emitDate(e)
  }

  const onChangeMonth = (type: string) => {
    let month = moment().month(currentMonth).format('M')
    if (type === "NEXT") {
      if (month === "12") generateDate(1, Number(currentYear) + 1)
      else generateDate(Number(month) + 1, Number(currentYear))
    } else {
      if (month === "12") generateDate(1, Number(currentYear) - 1)
      else generateDate(Number(month) - 1, Number(currentYear))
    }
  }

  useEffect(() => {
    generateDate(Number(moment().format('MM')), Number(moment().format('YYYY')))
    setSelectedDate(moment().format('DD'))
  }, [])

  return (
    <div className="date-picker">
      <div className="date-picker__header flex items-center w-full justify-center">
        <LeftCircleOutlined className="text-lg cursor-pointer" onClick={() => onChangeMonth("PREV")} />
        <h1 className="mx-3 text-lg">{currentMonth} - {currentYear}</h1>
        <RightCircleOutlined className="text-lg cursor-pointer" onClick={() => onChangeMonth("NEXT")} />
      </div>
      <div className="date-picker__data flex items-center mt-5">
        <Slider {...sliderSettings}>
          {
            dates.map((date: any, i: any) => {
              return (
                <DateObject date={date} key={i} selectedDate={selectedDate} onClick={() => onChangeDate(date)} />
              )
            })
          }
        </Slider>
      </div>
    </div>
  )
}

function DateObject({ date, selectedDate, onClick }: any) {
  let dateCls = classNames({
    "font-medium": true,
    " date-picker__date--active": moment(date).format("DD") === selectedDate
  })
  return (
    <div className="date-picker__date cursor-pointer justify-center flex items-center flex-col" onClick={onClick}>
      <span className="text-xs text-gray-500 text-center mb-2">{moment(date).format('ddd')}</span>
      <h1 className={dateCls}>{moment(date).format("DD")}</h1>
    </div>
  )
}