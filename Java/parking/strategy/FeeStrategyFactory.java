package parking.strategy;

import parking.enums.VehicleType;

public class FeeStrategyFactory {

    public static FeeStrategy getStrategy(
            VehicleType type) {

        switch (type) {

            case BIKE:
                return new BikeFeeStrategy();

            case CAR:
                return new CarFeeStrategy();

            default:
                throw new RuntimeException(
                        "Invalid Vehicle Type");
        }
    }
}