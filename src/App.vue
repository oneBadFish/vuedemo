<template>
  <div id="app">
    <headers></headers>
    <footers></footers>
    <router-view/>
  </div>
</template>

<script>
import Headers from '@/components/Headers'
import Footers from '@/components/Footers'

export default {
  name: 'App',
  components : {
    Headers,
    Footers
  }
}
</script>

<style>
*{
	margin:0;
  padding:0;
  box-sizing: border-box;
}
a{
	text-decoration: none;
	color:#000;
}
img{
	width:100%;
	height:100%;
	border:none;
	vertical-align: middle;
}
.clearfix:before,.clearfix:after{
	content: '';
	display:table;
}
.clearfix:after{
	clear:both;
}
ul,li,ol{
	list-style: none;
}
html{
  font-size: 50px;
}
body{
	/* font-family: "Helvetica Neue",Helvetica,Arial,sans-serif; */
	color: #2f2e2e;
	/* font-size: 14px; */
	font: 16px/1.5 Helvetica,sans-serif,STHeiTi;;
}
button{
	outline: none;
	border: none;
} 
.content{
  margin-top: 40px;
}
</style>
