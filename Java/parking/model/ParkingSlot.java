package parking.model;

import parking.enums.SlotStatus;
import parking.enums.VehicleType;

public class ParkingSlot {
    private String slotId;
    private VehicleType supportedType;
    private SlotStatus occupied;
    private Vehicle parkedVehicle;

    public ParkingSlot(String slotId, VehicleType supportedType, SlotStatus occupied) {
        this.slotId = slotId;
        this.supportedType = supportedType;
        this.occupied = occupied;
        System.out.println(
            "Constructor called: "
            + slotId + " "
            + supportedType + " "
            + occupied
    );
    }

    public String getSlotId() {
        return slotId;
    }

    public void setSlotId(String slotId) {
        this.slotId = slotId;
    }

    public VehicleType getSupportedType() {
        return supportedType;
    }

    public void setSupportedType(VehicleType supportedType) {
        this.supportedType = supportedType;
    }

    public SlotStatus isOccupied() {
        return occupied;
    }

    public void setOccupied(SlotStatus occupied) {
        this.occupied = occupied;
    }

    public Vehicle getParkedVehicle() {
        return parkedVehicle;
    }

    public void setParkedVehicle(Vehicle parkedVehicle) {
        this.parkedVehicle = parkedVehicle;
    }
}
