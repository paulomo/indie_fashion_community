import { IMeasurement } from "./IMeasurement";

export default class MeasurementFactory {
    
    private static instances: Map<string, IMeasurement>  = new Map();

    /**
     * Register
     */
    public static Register(aCatergoryName: string, anInstance: IMeasurement) : void {
        if (aCatergoryName !== null && anInstance !== null) {
            MeasurementFactory.instances.set(aCatergoryName, anInstance);
        }
    }

    // public static GetInstance(aCatergoryName: string) : IMeasurement {
    //     if (MeasurementFactory.instances.has(aCatergoryName)) {
    //         return MeasurementFactory.instances.get(aCatergoryName);
    //     }

    //     return null;
    // }

}

/* service or usecase class 
class Logger {
    public void log(String message, String loggerMedium) {
        LoggingOperation instance = LoggerFactory.getInstance(loggerMedium);
        instance.log(message);
    }
}
*/