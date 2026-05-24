
package parking.model;
import java.util.List;

public class ParkingLot {
    private Integer parkingLotId;
    private String location;
    private List<ParkingSlot> slots;

    public Integer getParkingLotId() {
        return parkingLotId;
    }

    public void setParkingLotId(Integer parkingLotId) {
        this.parkingLotId = parkingLotId;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public List<ParkingSlot> getSlots() {
        return slots;
    }

    public void setSlots(List<ParkingSlot> slots) {
        this.slots = slots;
    }

    public ParkingLot(Integer parkingLotId, String location, List<ParkingSlot> slots) {
        this.parkingLotId = parkingLotId;
        this.location = location;
        this.slots = slots;
    }
}
