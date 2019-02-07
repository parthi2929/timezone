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



  // Create a timeline displaying in PST
var timelinePST = new vis.Timeline(document.getElementById('PST'), items, {
    editable: true,
    start: start,
    end: end,
    moment: function (date) {
      return moment(date).tz('America/Los_Angeles');  
    },
    format: {
        minorLabels: {
            hour: 'h:mm'
        }
    }
  });
  timelinePST.addCustomTime(customTime);

// CST
var timelineCST = new vis.Timeline(document.getElementById('CST'), items, {
    editable: true,
    start: start,
    end: end,
    moment: function (date) {
      return moment(date).tz('America/Regina');  
    },
    format: {
        minorLabels: {
            hour: 'h:mm'
        }
    }
  });
  timelineCST.addCustomTime(customTime);

// EST
var timelineEST = new vis.Timeline(document.getElementById('EST'), items, {
    editable: true,
    start: start,
    end: end,
    moment: function (date) {
      return moment(date).tz('America/New_York');  
    },
    format: {
        minorLabels: {
            hour: 'h:mm'
        }
    }
  });

  timelineEST.addCustomTime(customTime);


// Create a timeline displaying in local time (default)
var timelineLocal = new vis.Timeline(document.getElementById('LOCAL'), items, {
    editable: true,
    start: start,
    end: end,
    format: {
        minorLabels: {
            hour: 'h:mm'
        }
    }
    });
timelineLocal.addCustomTime(customTime);
