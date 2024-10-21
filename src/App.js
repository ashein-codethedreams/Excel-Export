import { Table } from "antd";
import "./App.css";
import ExcelExport from "./ExportExcel";

const data = [
  {
    id: 1,
    name: "John Doe",
    age: 0,
    profession: "Developer",
    salary: 2000000, // Salary is 0, so the column will be hidden
    bonus: 0, // Bonus is 0, so the column will be hidden
    allowance: 1000,
    profit: 5000,
    charges: 0, // Charges is 0, so the column will be hidden
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    profession: "Designer",
    salary: 1000000,
    bonus: 10000,
    allowance: 2000,
    profit: 3000,
    charges: 1000,
  },
];

const columns = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Profession", dataIndex: "profession", key: "profession" },
  { title: "Salary", dataIndex: "salary", key: "salary" },
  { title: "Bonus", dataIndex: "bonus", key: "bonus" },
  { title: "Allowance", dataIndex: "allowance", key: "allowance" },
  { title: "Profit", dataIndex: "profit", key: "profit" },
  { title: "Charges", dataIndex: "charges", key: "charges" },
];

// Generalized function to filter columns based on John Doe's data
const filterColumnsBasedOnJohnDoe = (data, columns) => {
  const johnDoe = data.find((person) => person.name === "John Doe");

  if (!johnDoe) return columns; // If John Doe is not found, return all columns

  // Iterate over each field in John Doe's data
  const filteredColumns = columns.filter((column) => {
    const fieldValue = johnDoe[column.dataIndex];

    // Only keep the column if its corresponding value in John Doe's data is not zero
    return fieldValue !== 0;
  });

  return filteredColumns;
};

function App() {
  const filteredColumns = filterColumnsBasedOnJohnDoe(data, columns);

  return (
    <div className="App">
      <h1>Export Data to Excel</h1>
      <ExcelExport data={data} fileName="employees" />
      <Table dataSource={data} columns={filteredColumns} rowKey="id" />
    </div>
  );
}

export default App;
