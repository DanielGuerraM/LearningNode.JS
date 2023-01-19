let count = 0;
let success = 0;
let failed = [];

let recipients = [
    {name: 'Daniel', email: 'daniel@email'},
    {name: 'Ana', email: 'ana@email'},
    {name: 'Thomas', email: 'thomas@email'},
    {name: 'Mike', email: 'mike@email'},
    {name: 'Lisa', email: 'lisa@email'},
];

function dispatch(recipient, callback){
    sendEmail(
        {
            subject: 'Dinner tonight',
            message: 'We have lots of cabbage on the plate, you coming?',
            smpt: recipient.email
        },
        callback
    );
}

function email(result) {
    console.log(`Result ${result.count} attempts \
    & ${result.success} succeeded emails`);

    if(result.failed.length)
    console.log(`Failes to send to: \
    \n${result.failed.join('\n')}\n`);
}

recipients.forEach(function(recipient){
    dispatch(recipient, function(err) {
        if(!err){
            success += 1;
        } else{
            failed.push(recipient.name);
        }
        count += 1;

        if(count === recipients.length){
            final({
                count,
                success,
                failed
            });
        }
    });
});

