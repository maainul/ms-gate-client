import moment from "moment";


export const DDMMMYYYY = ({timestamp}) =>{
    // Convert timestamp to Moment.js object
    const dateObject = moment(timestamp)

    // Format the Date // Output: 30 March 2024
    return dateObject.format('DD MMMM YYYY')
}
