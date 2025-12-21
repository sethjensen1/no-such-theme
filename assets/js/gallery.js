document.addEventListener('keydown', (e) => {
	switch (e.key) {
			
		case 'Escape':
		case 'Esc':
			window.location.hash = "#close";
			break;
			
		case 'Left':
		case 'ArrowLeft':
			const currentEl = document.querySelector(window.location.hash);
			if (!currentEl) return;

			const prevEl = currentEl.previousElementSibling;
			if (!prevEl) return;

			window.location.hash = `#${prevEl.id}`;
			
			break;
			
		case 'Right':
		case 'ArrowRight':
			const currentEl2 = document.querySelector(window.location.hash);
			if (!currentEl2) return;

			const nextEl = currentEl2.nextElementSibling;
			if (!nextEl) return;

			window.location.hash = `#${nextEl.id}`;
			
			break;
			
		default:
			return;
			
	}
});