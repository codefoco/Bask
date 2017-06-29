      function onProcess()
      {
            var s1 = parseFloat($("#s1").val());
            var s2 = parseFloat($("#s2").val());
            var cov12 = parseFloat($("#cov12").val());
            var S = parseFloat($("#S").val());

            cov12 = cov12*s1*s2;

            s1 = s1*s1;
            s2 = s2*s2;
            S  = S*S;

            var delta = S * (s1 + s2 - 2*cov12) + cov12*cov12 - s1*s2;

            var w1      = (  Math.sqrt (delta) + cov12 - s2)/(2*cov12 - s1 -s2);
            var w1linha = (- Math.sqrt (delta) + cov12 - s2)/(2*cov12 - s1 -s2);

            var w2 = 1 - w1;
            var w2linha = 1 - w1linha;

            $("#w1").text("w1 = " + w1.toFixed(3) + ",  w2 = " + w2.toFixed(3));
            $("#w1linha").text("w1` = " + w1linha.toFixed(3) + ",  w2` = " + w2linha.toFixed(3));
      }