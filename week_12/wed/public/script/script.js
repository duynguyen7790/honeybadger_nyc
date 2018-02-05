$(function() {
    console.log('loaded');
    $('body').on('click','.track-name', function() {
        const _this = $(this);
        const $id = _this.data('id');
        //console.log($id);

        const result = $.ajax({
            url: `/track/${$id}`
        })
        //console.log(result);
        result.then(function(data) {
            console.log(data);
            location.href = data;
            /*let audioTemplate = `
                <audio controls>
                    <source src=${data}>
                </audio>
            `
            $('').append(audioTemplate);*/
        })
    });
});