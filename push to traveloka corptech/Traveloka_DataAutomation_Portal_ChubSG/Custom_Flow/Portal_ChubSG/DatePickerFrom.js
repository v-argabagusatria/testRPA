function(element, input) {
    document.getElementById('ctl00_MyContent_dateFromSearchPicker1_selecteddates').value = input+'.0.0.0';
    document.getElementById('ctl00_MyContent_dateFromSearchPicker1_visibledate').value = input;
    return "done"
}