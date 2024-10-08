browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'getschedule') {
        const tableData = document.getElementById('Subject');
        if (tableData) {
            const schedule_output = parseTableData(tableData);

            browser.runtime.sendMessage({
                type: "receiveschedule",
                schedule: schedule_output
            });
        } 
    }
});


function parseTableData(tableContent) {
    const rows = tableContent.getElementsByTagName("tbody")[0].getElementsByTagName("tr")
    const scheduleEntries = [];

    for (let i = 0; i < rows.length; i +=1) {
        let data = rows[i].getElementsByTagName("td");
        let temp = data[6].textContent.trim();
        temp = temp.split("Faculty:")
        schedule = temp[0];
        let instructor = temp[1];
        if (isNumber(schedule[0])) {
            let x = schedule.split(" ");
            x = x.slice(5);
            x = x.join(" ");
            schedule = x;
        }
        const entry = {
            subject_code: data[1].textContent.trim(),
            subject: data[2].textContent.trim(),
            schedule: schedule,
            instructor: instructor
        }
        scheduleEntries.push(entry);
    }

    return scheduleEntries;
}

function isNumber(value) {
    // Try to convert the value to a number using parseFloat()
    const numberValue = parseFloat(value);
  
    // Check if the conversion resulted in a valid number
    return !isNaN(numberValue) && isFinite(numberValue);
  }