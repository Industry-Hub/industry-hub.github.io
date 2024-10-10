import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format, subDays } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type DatePickerWithRangeProps = React.HTMLAttributes<HTMLDivElement> & {
  date: DateRange | undefined;
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
};

export function DatePickerWithRange({
  className,
  date,
  setDate,
}: DatePickerWithRangeProps) {
  const [calendarOpen, setCalendarOpen] = React.useState(false);
  
  const handleLast7Days = () => {
    const today = new Date();
    setDate({ from: subDays(today, 6), to: today });
  };

  const handleLast40Days = () => {
    const today = new Date();
    setDate({ from: subDays(today, 39), to: today });
  };

  const handleLast1Year = () => {
    const today = new Date();
    setDate({ from: subDays(today, 364), to: today });
  };

  // const handleOk = () => {
    
  // };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
          <div className="flex justify-around p-2 border-t">
            <Button variant="link" onClick={handleLast7Days}>
              Last 7 Days
            </Button>
            <Button variant="link" onClick={handleLast40Days}>
              Last 40 Days
            </Button>
            <Button variant="link" onClick={handleLast1Year}>
              Last 1 Year
            </Button>
          </div>
          <div className="flex justify-end p-2 border-t">
            <Button id="popover-close-btn" variant="outline" onClick={()=>{setCalendarOpen(false);}}>
              OK
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
