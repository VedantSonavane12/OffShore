"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"
import clsx from "clsx"

export function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={clsx("rounded-xl shadow-lg bg-white p-6", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-6",
        month: "space-y-4",
        caption: "flex justify-between items-center",
        caption_label: "text-lg font-semibold text-gray-800",
        nav: "flex items-center gap-2",
        nav_button:
          "h-8 w-8 text-gray-600 hover:text-black flex items-center justify-center transition-colors",
        nav_button_previous: "rounded-full hover:bg-gray-100",
        nav_button_next: "rounded-full hover:bg-gray-100",
        table: "w-full border-separate border-spacing-1",
        head_row: "flex",
        head_cell: "w-10 text-center text-sm text-gray-400 font-medium",
        row: "flex w-full",
        cell: "w-10 h-10 text-sm text-gray-900 rounded-md transition-colors flex items-center justify-center",
        day: "w-full h-full flex items-center justify-center hover:bg-gray-200 rounded-md transition-all",
        day_selected: "bg-blue-600 text-white hover:bg-blue-700",
        day_today: "border border-blue-500 text-blue-600 font-semibold",
        day_outside: "text-gray-300",
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft className="h-5 w-5" />,
        IconRight: () => <ChevronRight className="h-5 w-5" />,
      }}
      {...props}
    />
  )
}
