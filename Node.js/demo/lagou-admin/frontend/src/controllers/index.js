import indexTpl from '../views/index.art'
import signinTpl from '../views/signin.art'
import usersTpl from '../views/users.art'
import usersListTpl from '../views/users-list.art'
import usersListPageTpl from '../views/users-pages.art'

const htmlIndex = indexTpl({})
const htmlSignin = signinTpl({})

const pageSize = 10

let dataList = []

const _handleSubmit = (router) => {
    return (e) => {
        e.preventDefault()
        router.go('/index')
    }
}

const _signup = () => {
    const $btnClose = $('#users-close')

    // 提交表单
    const data = $('#users-form').serialize()
    $.ajax({
        url: '/api/users',
        type: 'post',
        data,
        success(res) {
            _loadData()
        }
    })

    $btnClose.click()
}

const _pagination = (data) => {
    const total = data.length
    const pageCount = Math.ceil(total / pageSize)
    const pageArray = new Array(pageCount)

    const htmlPage = usersListPageTpl({
        pageArray
    })

    $('#users-page').html(htmlPage)
    $('#users-page-list li:nth-child(2)').addClass('active')
    $('#users-page-list li:not(:first-child, :last-child)').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active')
        _list($(this).index())
    })
}

const _loadData = () => {
    return $.ajax({
        url: '/api/users',
        // async: false,
        success(result) {
            dataList = result.data
            // 分页
            _pagination(result.data)

            // 数据渲染
            _list(1)
        }
    })
}

const _list  = (pageNo) => {
    let start = (pageNo - 1) * pageSize
    // 渲染list
    $('#users-list').html(usersListTpl({
        data: dataList.slice(start, start + pageSize)
    }))
}

const signin = (router) => {
    return (req, res, next) => {
        res.render(htmlSignin)

        $('#signin').on('click', _handleSubmit(router))
    }
}


const index = (router) => {
    return (req, res, next) => {
        //  渲染首页
        res.render(htmlIndex)

        // windew resize, 让页面铺满整个屏幕
        $(window, ".wrapper").resize()

        // 填充用户表单
        $('#content').html(usersTpl({}))

        // 初次渲染list
        _loadData()

        // 点击保存, 提交表单
        $('#users-save').on('click', _signup)
    }
}

export {
    signin,
    index,
}