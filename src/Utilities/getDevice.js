export default function getDevice(target){

    const devices = {
        mobile: '(min-width: 300px)',
        tablet: '(min-width: 700px)',
        browser: '(min-width: 1200px)'
    }

    return devices[target];
}