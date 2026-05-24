package parking;

import java.util.ArrayList;
import java.util.List;

import parking.enums.SlotStatus;
import parking.enums.VehicleType;
import parking.model.ParkingLot;
import parking.model.ParkingSlot;
import parking.model.Ticket;
import parking.model.Vehicle;
import parking.service.ParkingService;

public class Main {
    public static void main(String[] args) {
        ParkingSlot slot1 = new ParkingSlot("G01", VehicleType.CAR, SlotStatus.AVAILABLE);
        ParkingSlot slot2 = new ParkingSlot("G02", VehicleType.BIKE, SlotStatus.AVAILABLE);
        List<ParkingSlot> slots = new ArrayList<>();
        slots.add(slot1);
        slots.add(slot2);

        ParkingLot railwayStationLot = new ParkingLot(1, "Raliway", slots);
        ParkingService service = new ParkingService(railwayStationLot);
        try {
            Ticket ticket = service.parkVehicle(new Vehicle(123, VehicleType.BIKE));
            service.parkVehicle(new Vehicle(245, VehicleType.BIKE));
            service.parkVehicle(new Vehicle(131, VehicleType.BIKE));
            service.parkVehicle(new Vehicle(3, VehicleType.CAR));
            service.parkVehicle(new Vehicle(12, VehicleType.CAR));
            service.removeVehicle(ticket);
            service.parkVehicle(new Vehicle(245, VehicleType.BIKE));
            service.parkVehicle(new Vehicle(131, VehicleType.BIKE));
        } catch (Exception e) {
            System.out.println(e.getMessage() + "  " + e.getStackTrace().toString());
        }
    }
}
