document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
    document.querySelectorAll('.burger .line').forEach(line => {
      line.classList.toggle('active');
    });
  });
  