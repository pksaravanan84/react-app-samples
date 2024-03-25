import CarDetail from "./CarDetail";
import Row from "react-bootstrap/Row";

export default function CarList() {
  const carDetails = [
    {
      id: 1,
      make: "Toyota",
      model: "Corolla",
      year: 2024,
      price: 15000,
      vin: "VIN12345",
    },
    {
      id: 2,
      make: "Toyota",
      model: "Camry",
      year: 2024,
      price: 15000,
      vin: "VIN12345",
    },
    {
      id: 3,
      make: "Honda",
      model: "Accord",
      year: 2024,
      price: 15000,
      vin: "VIN12345",
    },
    {
      id: 4,
      make: "Honda",
      model: "Civic",
      year: 2024,
      price: 15000,
      vin: "VIN12345",
    },
    {
      id: 5,
      make: "Nissan",
      model: "Altima",
      year: 2024,
      price: 15000,
      vin: "VIN12345",
    },
  ];

  return (
    <>
      <Row>
          <a variant="primary" href="/AddCarDetail">Add New Car</a>{" "}</Row>
      <Row xs={1} md={2} className="g-5">
        {carDetails.map((car) => (
          <CarDetail carInfo={car} key={car.id}></CarDetail>
        ))}
      </Row>
    </>
  );
}
