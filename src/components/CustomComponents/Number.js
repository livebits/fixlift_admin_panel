function formatMoney(n) {
    const t = ',',
      s = n < 0 ? '-' : '',
      i = String(parseInt((n = Math.abs(Number(n) || 0))));
      //Added by SHA
      let j = null
     j = (j = i.length) > 3 ? j % 3 : 0;
    return (
      (j ? i.substr(0, j) + t : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) +
      s
    );
  }
  
  function number(num) {
    if (num || num === 0) {
      num = String(num);
      if (num && num.length) {
        return num.replace(/\d/g, function(x) {
          return String.fromCharCode(x.charCodeAt(0) + 1728);
        });
      }
      return '';
    }
    return num;
  }
  
  function Enumber(num) {
    if (num) {
      num = String(num);
      if (num && num.length) {
        num = num.replace(/,/g, '');
        return num.replace(/[۰-۹]/g, function(x) {
          return String.fromCharCode(x.charCodeAt(0) - 1728);
        });
      }
      return '';
    }
    return num;
  }
  
  function mony(n) {
    return number(formatMoney(n));
  }
  
  function word(value) {
    var delimiter,
      valueParts,
      digit,
      i,
      iThree,
      numbers,
      parts,
      result,
      resultThree,
      three;
  
    if (!isFinite(value)) {
      return 'عدد اشتباه است';
    }
    if (typeof value !== 'string') {
      value = value.toString();
    }
    if (value.length > 24) {
      return 'عدد بسیار بزرگ است';
    }
  
    parts = [
      '',
      'هزار',
      'میلیون',
      'میلیارد',
      'تریلیون',
      'کوادریلیون',
      'کویینتیلیون',
      'سکستیلیون'
    ];
    numbers = {
      0: [
        '',
        'صد',
        'دویست',
        'سیصد',
        'چهارصد',
        'پانصد',
        'ششصد',
        'هفتصد',
        'هشتصد',
        'نهصد'
      ],
      1: ['', 'ده', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'],
      2: ['', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'],
      two: [
        'ده',
        'یازده',
        'دوازده',
        'سیزده',
        'چهارده',
        'پانزده',
        'شانزده',
        'هفده',
        'هجده',
        'نوزده'
      ],
      zero: 'صفر'
    };
    delimiter = ' و ';
  
    valueParts = value
      .split('')
      .reverse()
      .join('')
      .replace(/\d{3}(?=\d)/g, '$&,')
      .split('')
      .reverse()
      .join('')
      .split(',')
      .map(function(str) {
        return Array(4 - str.length).join('0') + str;
      });
  
    result = (function() {
      var _results;
      _results = [];
      for (iThree in valueParts) {
        three = valueParts[iThree];
  
        resultThree = (function() {
          var _i, _len, _results1;
          _results1 = [];
  
          for (i = _i = 0, _len = three.length; _i < _len; i = ++_i) {
            digit = three[i];
            if (i === 1 && digit === '1') {
              _results1.push(numbers.two[three[2]]);
            } else if (
              (i !== 2 || three[1] !== '1') &&
              numbers[i][digit] !== ''
            ) {
              _results1.push(numbers[i][digit]);
            } else {
              continue;
            }
          }
  
          return _results1;
        })();
  
        resultThree = resultThree.join(delimiter);
  
        if (!!resultThree)
          _results.push(
            resultThree + ' ' + parts[valueParts.length - iThree - 1]
          );
      }
      return _results;
    })();
  
    result = result.filter(function(x) {
      return x.trim() !== '';
    });
  
    result = result.join(delimiter).trim();
    if (result === '') {
      result = numbers.zero;
    }
  
    return result;
  }
  
  export { word, mony, number, Enumber };
  