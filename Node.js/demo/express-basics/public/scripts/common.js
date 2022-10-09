$.ajax({
    url: '/api/list',
    success(result) {
        console.log(result);
        let html = '<ul>'
        $.each(result.data, (index, value) => {
            html += `<li>${value}</li>`
        })
        html += '</ul>'

        let templateStr = `
            <ul>
                {{each data}}
                <li>{{$value}}</li>
                {{/each}}
            </ul>
        `

        let str = template.render(templateStr, {
            data: result.data
        })

        $('#list').html(str)
    }
})