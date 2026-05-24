package parking.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import parking.enums.SlotStatus;
import parking.enums.VehicleType;
import parking.model.ParkingLot;
import parking.model.ParkingSlot;
import parking.model.Ticket;
import parking.model.Vehicle;
import parking.strategy.FeeStrategy;
import parking.strategy.FeeStrategyFactory;

public class ParkingService {
    private ParkingLot parkingLot;

    public ParkingService(ParkingLot parkingLot) {
        this.parkingLot = parkingLot;
    }

    public Ticket parkVehicle(Vehicle vehicle) throws Exception {
        ParkingSlot slot = findFreeSlot(vehicle.getVehicleType());
        if (slot == null) {
            // throw new Exception("No Slot FOund");
            System.out.println("NO SLOT AVAILABLE");
            return null;
        }

        slot.setOccupied(SlotStatus.OCCUPIED);
        slot.setParkedVehicle(vehicle);
        Ticket ticket = new Ticket(
                UUID.randomUUID()
                        .toString(),
                vehicle,
                slot,
                LocalDateTime.now());
        System.out.println("PARKING SUCCESS");
        return ticket;
    }

    public String removeVehicle(Ticket ticket) {
        List<ParkingSlot> parkingSlots = this.parkingLot.getSlots();
        ParkingSlot slotFound = parkingSlots.stream()
                .filter(f -> f.getSlotId().equals(ticket.getSlot().getSlotId()))
                .findFirst()
                .orElse(null);
        LocalDateTime exitTime = LocalDateTime.now();
        if (slotFound != null && slotFound.getParkedVehicle() != null) {
            slotFound.setOccupied(SlotStatus.AVAILABLE);
            slotFound.setParkedVehicle(null);
            FeeStrategy strategy = FeeStrategyFactory
                    .getStrategy(
                            ticket
                                    .getVehicle()
                                    .getVehicleType());
            Integer fare = strategy.calculateFare(
                    ticket
                            .getEntryTime(),
                    exitTime);
            System.out.println(
                    "REMOVE VEHICLE SUCCESS Fare = ₹" + fare);
            return "Removed Vehicle Success";
        }
        System.out.println("UNABLE TO REMOVE VEHICLE SUCCESS");
        return "Unable to Remove Vehicle";
    }

    public ParkingSlot findFreeSlot(VehicleType type) {
        List<ParkingSlot> slots = this.parkingLot.getSlots();
        ParkingSlot slot = slots.stream()
                .filter(f -> {
                    // System.out.println(
                    // f.getSlotId()
                    // + " "
                    // + f.getSupportedType()
                    // + " "
                    // + f.isOccupied()
                    // );
                    return f.getSupportedType() == type && f.isOccupied() == SlotStatus.AVAILABLE;
                })
                .findFirst()
                .orElse(null);
        return slot;
    }
}
