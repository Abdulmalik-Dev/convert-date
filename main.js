function convertTime(time) {
    let theMinute = '';
    // To Cheack From The Time If It 12 Or 24 Hours 
    if(time.includes('am') || time.includes('pm')){
        // Set The Hours 12 
        let ourDate = parseInt(time) + 12;
        if(ourDate == 24) ourDate = '0';
        // Set The Minute 
        theMinute = time.substr(time.indexOf(':')+1, 2);
        // Set The Time 
        return `${ourDate.toString()}:${theMinute.toString()}`;
    }else{
        // Set The Hours 24 
        let ourDate = parseInt(time);
        // To Check If The Hour Larger Than 12 - 12 From The Hour 
        if(ourDate > 12){
            ourDate = parseInt(time) - 12;
            // Set The Minute 
            theMinute = time.substr(time.indexOf(':')+1, 2);
            return `${ourDate.toString()}:${theMinute.toString()}pm`;
        }
        else {
            ourDate = `${parseInt(time)}`;
            if(ourDate == 00){
                ourDate = '12';
            };
            // Set The Minute 
            theMinute = time.substr(time.indexOf(':')+1, 2);
            // Set The Time
            return `${ourDate.toString()}:${theMinute.toString()}am`;
        }

 
    }
};
// Set The Time On The Page 
document.querySelector('.main div button').addEventListener('click', () =>
    document.querySelector('.main div p').textContent = 
        convertTime(document.querySelector('.main div input').value)
);