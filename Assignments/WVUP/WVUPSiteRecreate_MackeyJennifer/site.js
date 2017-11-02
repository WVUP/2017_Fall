Calendar.prototype.generateHTML = function(){
    
      // get first day of month
      var firstDay = new Date(this.year, this.month, 1);
      var startingDay = firstDay.getDay();
      
      // find number of days in month
      var monthLength = cal_days_in_month[this.month];
      
      // compensate for leap year
      if (this.month == 1) { // February only!
        if((this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0){
          monthLength = 29;
        }
      }
      
      // do the header
      var monthName = cal_months_labels[this.month]
      var html = '<table class="calendar-table">';
      html += '<tr><th colspan="7">';
      html +=  monthName + "&nbsp;" + this.year;
      html += '</th></tr>';
      html += '<tr class="calendar-header">';
      for(var i = 0; i <= 6; i++ ){
        html += '<td class="calendar-header-day">';
        html += cal_days_labels[i];
        html += '</td>';
      }
      html += '</tr><tr>';
    
      // fill in the days
      var day = 1;
      // this loop is for is weeks (rows)
      for (var i = 0; i < 9; i++) {
        // this loop is for weekdays (cells)
        for (var j = 0; j <= 6; j++) { 
          html += '<td class="calendar-day">';
          if (day <= monthLength && (i > 0 || j >= startingDay)) {
            html += day;
            day++;
          }
          html += '</td>';
        }
        // stop making rows if we've run out of days
        if (day > monthLength) {
          break;
        } else {
          html += '</tr><tr>';
        }
      }
      html += '</tr></table>';
    
      this.html = html;
    }


    Calendar.prototype.getHTML = function() {
        return this.html;
      }