import { ILocationRepository } from "../../../domain/repository/location/ILocationRepository";
import { AddLocationDTO } from "../../../application/location/useCase/addLocation/AddLocationDTO"
import { EditLocationDTO } from "../../../application/location/useCase/editLocation/EditLocationDTO"
import { GetLocationByLocationIdDTO } from "../../../application/location/useCase/getLocationByLocationId/GetLocationByLocationIdDTO"
import { GetAllLocationDTO } from "../../../application/location/useCase/getAllLocation/GetAllLocationDTO"
import { GetLocationByLocationNameDTO } from "../../../application/location/useCase/getLocationByLocationName/GetLocationByLocationNameDTO"
import { LaunchLocationDTO } from "../../../application/location/useCase/launchLocation/LaunchLocationDTO"
import { PauseLocationOperationDTO } from "../../../application/location/useCase/pauseLocationOperation/PauseLocationOperationDTO"
import { Api } from "../../../../../clothme.shared.kernel/infrastructure/http/Api";
import { Location } from "../../../domain/entity/location/Location";
import { LocationEndpoint } from "../endpoint/LocationEndpoint";
import { RemoveLocationDTO } from "../../../application/location/useCase/removeLocation/RemoveLocationDTO";


export class LocationRepositoryImpl extends Api implements ILocationRepository {

    public constructor() {
        super(); 
        this.addLocation = this.addLocation.bind(this);
        this.editLocation = this.editLocation.bind(this);
        this.getAllLocation = this.getAllLocation.bind(this);
        this.getLocationByLocationId = this.getLocationByLocationId.bind(this);
        this.getLocationByLocationName = this.getLocationByLocationName.bind(this);
        this.launchLocation = this.launchLocation.bind(this);
        this.pauseLocationOperation = this.pauseLocationOperation.bind(this);
        this.remove = this.remove.bind(this);
    }

    public async addLocation(data: AddLocationDTO): Promise<Location> {
        const queryString = `?employeeId=${data.employeeId}`;
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: LocationEndpoint.ADD_LOCATION + queryString,
                                data: JSON.stringify(data)
                                })
            const result = response.data;
            return result
        } catch (error) {
            return error
        }
    }

    public async editLocation(data: EditLocationDTO): Promise<Location> {
        const queryString = `?employeeId=${data.employeeId}`;
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: LocationEndpoint.EDIT_LOCATION + queryString,
                                data: JSON.stringify(data)
                                })
            const result = response.data;
            return result
        } catch (error) {
            return error
        }
    }

    public async getLocationByLocationId(data: GetLocationByLocationIdDTO): Promise<Location> {
        const queryString = `?employeeId=${data.employeeId}`;
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: LocationEndpoint.GET_LOCATION_BY_LOCATION_ID + queryString,
                                data: JSON.stringify(data)
                                })
            const result = response.data;
            return result
        } catch (error) {
            return error
        }
    }

    public async getAllLocation(data: GetAllLocationDTO): Promise<Location[]> {
        const queryString = `?employeeId=${data.employeeId}`;
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: LocationEndpoint.GET_ALL_LOCATION + queryString,
                                data: JSON.stringify(data),
                                //headers:
                                })
            const result = response.data;
            return result
            
        } catch (error) {
            return error
        }
    }

    public async getLocationByLocationName(data: GetLocationByLocationNameDTO): Promise<Location> {
        const queryString = `?employeeId=${data.employeeId}`;
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: LocationEndpoint.GET_LOCATION_BY_LOCATION_NAME + queryString,
                                data: JSON.stringify(data)
                                })
            const result = response.data;
            return result
            
        } catch (error) {
            return error
        }
    }

    public async launchLocation(data: LaunchLocationDTO): Promise<Location> {
        const queryString = `?employeeId=${data.employeeId}`;
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: LocationEndpoint.LAUNCH_LOCATION + queryString,
                                data: JSON.stringify(data)
                                })
            const result = response.data;
            return result
            
        } catch (error) {
            return error
        }
    }

    public async pauseLocationOperation(data: PauseLocationOperationDTO): Promise<Location> {
        const queryString = `?employeeId=${data.employeeId}`;
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: LocationEndpoint.PAUSE_LOCATION_OPERATION + queryString,
                                data: JSON.stringify(data)
                                })
            const result = response.data;
            return result
            
        } catch (error) {
            return error
        }
    }

    public async remove(data: RemoveLocationDTO): Promise<Location> {
        const queryString = `?&employeeId=${data.employeeId}`;
        try {
            const response = await this.requestMethod({
                                method: "POST",
                                url: LocationEndpoint.REMOVE_LOCATION + queryString,
                                data: JSON.stringify(data),
                                //headers:
                                })
            const result = response.data;
            return result
            
        } catch (error) {
            return error
        }
    }


}