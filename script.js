 var input = document.querySelectorAll("input")

        input.forEach(e => {
            e.addEventListener("click", () => {
                if (e.value == "b1") {
                    s1.play();
                    s2.pause();
                    s3.pause();
                    s4.pause();
                    s5.pause();
                    s6.pause();
                }
                else if (e.value == "b2") {
                    s1.pause();
                    s2.play();
                    s3.pause();
                    s4.pause();
                    s5.pause();
                    s6.pause();
                }
                else if (e.value == "b3") {
                    s1.pause();
                    s2.pause();
                    s3.play();
                    s4.pause();
                    s5.pause();
                    s6.pause();
                } else if (e.value == "b4") {
                    s1.pause();
                    s2.pause();
                    s3.pause();
                    s4.play();
                    s5.pause();
                    s6.pause();
                } else if (e.value == "b5") {
                    s1.pause();
                    s2.pause();
                    s3.pause();
                    s4.pause();
                    s5.play();
                    s6.pause();
                }
                else if (e.value == "b6") {
                    s1.pause();
                    s2.pause();
                    s3.pause();
                    s4.pause();
                    s5.pause();
                    s6.play();
                }
            })

        })


        document.addEventListener("keypress", function (e) {
            
            if (e.keyCode == 81) {
                s1.play();
                s2.pause();
                s3.pause();
                s4.pause();
                s5.pause();
                s6.pause();
            }
            else if (e.keyCode == 87) {
                s1.pause();
                s2.play();
                s3.pause();
                s4.pause();
                s5.pause();
                s6.pause();
            }
            else if (e.keyCode == 69) {
                s1.pause();
                s2.pause();
                s3.play();
                s4.pause();
                s5.pause();
                s6.pause();
            }
            else if (e.keyCode == 82) {
                s1.pause();
                s2.pause();
                s3.pause();
                s4.play();
                s5.pause();
                s6.pause();
            }
            else if (e.keyCode == 84) {
                s1.pause();
                s2.pause();
                s3.pause();
                s4.pause();
                s5.play();
                s6.pause();
            }
            else if (e.keyCode == 89) {
                s1.pause();
                s2.pause();
                s3.pause();
                s4.pause();
                s5.pause();
                s6.play();
            }
        })
