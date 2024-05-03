let preloader = $('.preloader')
let loader = $('.loader')
let wHeight = $(window).height()
let wWidth = $(window).width()
let line = 0

$(window).on('load', () => {
	loader.css({
		top: wHeight / 2 - 2.5,
		left: wWidth / 2 - 200,
	})

	do {
		loader.animate({
			width: line,
		})
		line += 400
	} while (line <= 400)

	if (line > 401) {
		loader.animate({
			left: 0,
			width: '100%',
		})

		$.when(
			loader.animate({
				top: '0',
				height: '100vh',
			})
		).done(() => preloader.fadeOut('slow'))
	}
})
