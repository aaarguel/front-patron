class TelematicAPI{
    
    constructor(){
        //this.url = "http://200.126.14.228:8074"
        this.url = "http://200.126.14.228:8075"
        this.routes = {
            cameras : '/cameras',
            sensors : '/sensors',
            measures: '/measures'
        }

    }
    
    getCameras(){
        return {
            url: this.url + this.routes.cameras,
            options: {
                method: 'GET',
                mode: 'cors'
            }
        }
    }

    async getCamerasAsync(){
        const resp = await fetch(this.url + this.routes.cameras);
        const cameras = await resp.json();
        return cameras;
    }

    getSensors(){
        return {
            url: this.url + this.routes.sensors,
            options: {
                method: 'GET',
                mode: 'cors'
            }
        }
    }

    async getSensorsAsync(){
        const resp = await fetch(this.url + this.routes.sensors);
        const sensors = await resp.json();
        return sensors;
    }
}

export default TelematicAPI;