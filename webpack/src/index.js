import './styles/common.sass'

import logo from '@assets/img.jpg'
import Post from '@models/Post'
import '@/react-example'
import $ from 'jquery'

const post = new Post('asdf sdfa !!!!')
console.log(post.toString())
console.log(logo)
console.log($('.container').html())

async function asfn() {
  return Promise.resolve('async is work')
}

asfn().then(data => { console.log(data) })
