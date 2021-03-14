import { IRepository } from "../../../../../clothme.shared.kernel/domain/repository/IRepository";
import { Location } from "../../entity/location/Location";
import { IDTO } from "../../../../../clothme.shared.kernel/application/dto/Idto";

export interface ILocationRepository extends IRepository<Location> {
    addLocation (data: IDTO) : Promise<Location>;
    editLocation (data: IDTO) : Promise<Location>;
    getLocationByLocationId (data: IDTO) : Promise<Location>;
    getAllLocation (data: IDTO) : Promise<Location[]>;
    getLocationByLocationName (data: IDTO) : Promise<Location>;
    launchLocation (data: IDTO) : Promise<Location>;
    pauseLocationOperation (data: IDTO) : Promise<Location>;
}   