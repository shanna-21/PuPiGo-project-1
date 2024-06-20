<script>
Project PuPiGo.querySelectorAll('.menu a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
</script>