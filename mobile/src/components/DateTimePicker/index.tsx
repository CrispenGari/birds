import { View, Text } from "react-native";
import React from "react";
import Select from "../Select";

const currentYear = new Date().getFullYear();
const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

const getDaysInMonth = (year: number, month: number): number =>
  new Date(year, month, 0).getDate();

const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const DateTimePicker: React.FC<{
  setDate: React.Dispatch<
    React.SetStateAction<{
      day: string;
      month: string;
      year: string;
    }>
  >;
}> = ({ setDate }) => {
  const [d, setD] = React.useState(days[4].toString());
  const [m, setM] = React.useState(months[9]);
  const [y, setY] = React.useState("1999");
  const [ds, setDs] = React.useState(days);

  React.useEffect(() => {
    let mounted: boolean = true;
    if (mounted) {
      setDate({
        day: d,
        month: m,
        year: y,
      });
    }
    return () => {
      mounted = false;
    };
  }, [d, m, y]);
  React.useEffect(() => {
    let mounted: boolean = true;
    if (mounted) {
      setDs(
        days.slice(0, getDaysInMonth(Number.parseInt(y), months.indexOf(m) + 1))
      );
    }
    return () => {
      mounted = false;
    };
  }, [m, y]);

  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <Select width={70} data={ds} setValue={setD} defaultValue={d} />
      <View
        style={{
          marginRight: 10,
        }}
      />
      <Select data={months} width={70} setValue={setM} defaultValue={m} />
      <View
        style={{
          marginRight: 10,
        }}
      />
      <Select
        data={range(currentYear, currentYear - 50, -1)}
        width={100}
        setValue={setY}
        defaultValue={y}
      />
    </View>
  );
};

export default DateTimePicker;
