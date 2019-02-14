// Create a DataSet (allows two way data-binding)
var today = vis.moment(vis.moment.utc().format('YYYY-MM-DDT00:00:00.000Z'));
var start = today.clone();
var end = today.clone().add(2, 'day');
var customTime = today.clone().add(28, 'hour');

var items = new vis.DataSet([
  // {id: 1, content: 'item 1', start: today.clone().add(8, 'hour')},
  // {id: 2, content: 'item 2', start: today.clone().add(16, 'hour')},
  // {id: 3, content: 'item 3', start: today.clone().add(32, 'hour')}
]);

function getoptions(tzo)
{
  var options = {start: start, end:end, 
    moment: function (date) {
      return moment(date).tz(tzo);
    }
  }  
  return options; 
}


// Create a timeline displaying in PST
tzs = ['America/Los_Angeles', 'America/Regina','America/New_York'];
IDs = ['PST','CST','EST'];
tlos = [];

for (var i = 0; i<3; i++)
{
  tlos[i] = new vis.Timeline(document.getElementById(IDs[i]), items, getoptions(tzs[i]));
  tlos[i].addCustomTime(customTime);
}


// Create a timeline displaying in local time (default)
var options = {
  editable: true,
  start: start,
  end: end,
  format: {
    minorLabels: {
      hour: 'h:mm'
    }
  }
}
var timelineLocal = new vis.Timeline(document.getElementById('LOCAL'), items, options);
timelineLocal.addCustomTime(customTime);
