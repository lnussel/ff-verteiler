$(document).ready(function() {
  var state = {
    status_A: true,
    status_P : true,
    status_F : true,
    ort_W : true,
    ort_E : true,
    ausschuss : false,
    jugend : false,
  };

  $.each(state, function(k, v) {
    var $elem = $('#'+k);
    $elem.on('change', function(){
      state[k] = this.checked;
      console.log(k + " " + state[k]);
      table.draw();
    });
    state[k] = $elem.is(':checked');
    console.log(k + " " + state[k]);
  });

  var table = $('#mails').DataTable( {
    ajax: "/mails.json",
    'dataSrc': 'data',
    "columnDefs": [
      {
        "targets": [ 4 ],
        "visible": false,
      },
      {
        "targets": [ 5 ],
        "visible": false,
      }
    ]
  });
  table.on( 'search.dt', function () {
    console.log("filtering done");
    var addrs = []
    table.column(1, {search: 'applied'}).data()
      .each( function ( value, index ) {
        addrs.push(value);
      } );
    console.log(addrs.join(','));
    var $btn = $('#btn-send');
    console.log($btn.prop('href'))
    $btn.prop('href', "mailto:Mitglieder: ;?bcc=" + addrs.join(','));
  } );

  $.fn.dataTable.ext.search.push(
    function( settings, searchData, index, rowData, counter ) {
      if (!state['status_A'] && searchData[2] == 'Aktiv') {
        return false;
      }
      if (!state['status_P'] && searchData[2] == 'Passiv') {
        return false;
      }
      if (!state['status_F'] && searchData[2] == 'Fördernd') {
        return false;
      }
      if (!state['ort_W'] && searchData[3] == 'Wachendorf') {
        return false;
      }
      if (!state['ort_E'] && searchData[3] == 'Egersdorf') {
        return false;
      }
      if (state['ausschuss'] && searchData[4] != 'True') {
        return false;
      }
      if (state['jugend'] && searchData[5] != 'True') {
        return false;
      }
      return true;
    }
  );
});
