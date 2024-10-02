const svgElement = document.getElementById('svgElement');
const totalHeight = document.body.scrollHeight - window.innerHeight;



window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const percentage = scrollY / totalHeight;

    if (percentage > 0.1 && percentage <= 0.4) {
        svgElement.classList.add('puzzle-3-aniamting');
        leftPosition = 70 - ((percentage - 0.1) / 0.3) * (70 - 10); // move from 70 to 10 on X & stay styill at 50 on Y
    } else if (percentage > 0.4 && percentage <= 1) {
        svgElement.classList.add('puzzle-3-aniamting');
        leftPosition = 10 - ((percentage - 0.4) / 0.6) * (10 + 5); // move from 10 to 5 on X & stay styill at 50 on Y
    } else {
        svgElement.classList.remove('puzzle-3-aniamting'); // stay still at 70 on X & move from 70 to 50 on Y 
        leftPosition = 70;
    }


    // Handle rotation (same as before)
    let rotation;
    const minRotationPercentage = 0.1; // The threshold

    if (percentage <= minRotationPercentage) {
        rotation = 20;
    } else {
        const adjustedPercentage = (percentage - minRotationPercentage) / (1 - minRotationPercentage);
        rotation = 20 - adjustedPercentage * 500;
    }

    // Handle scale
    let scale;

    if (percentage > 0.1 && percentage <= 0.5) {
        // Scale from 1 to 0.4
        const adjustedPercentage = (percentage - 0.1) / (0.5 - 0.1);
        scale = 1 + adjustedPercentage * (0.4 - 1);
    } else if (percentage > 0.5) {
        // Scale from 0.4 to 2
        const adjustedPercentage = (percentage - 0.5) / (1 - 0.5);
        scale = 0.4 + adjustedPercentage * (2 - 0.4);
    } else {
        // Default scale when percentage <= 0.1
        scale = 1;
    }


    svgElement.style.left = `${leftPosition}%`;
    svgElement.style.transform = `translateY(-50%) rotate(${rotation}deg) scale(${scale})`;
});


  document.querySelectorAll('a[href="#hero-studio"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); 


      const targetScrollPosition = document.documentElement.scrollHeight / 3;


      window.scrollTo({
        top: targetScrollPosition,
        behavior: 'smooth'
      });
    });
  });
