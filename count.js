  
//自定义的Nightwatch断言。
//方法的名称是文件名。
//可以在这样的测试中使用：
//
// browser.assert.elementCount（selector，count）
//
//有关如何编写自定义断言的信息，请参见
// http://nightwatchjs.org/guide#writing-custom-assertions
出口。断言 = 函数 （选择器， 计数） {
  这个。message  =  '测试元素<'  + 选择器 +  '>是否具有计数：'  + 计数
  这个。预期 = 计数
  这个。通过 = 函数 （val ） {
    返回 val  ===  this 。预期
  }
  这个。值 = 函数 （res ） {
    返回 res 。值
  }
  这个。命令 = 功能 （cb ） {
    var  self  =  this
    返回 这个。api 。执行（函数 （选择器） {
      退货 文件。querySelectorAll （选择器）。长度
    } ， [选择器] ， 功能 （res ） {
      cb 。致电（self ， res ）
    } ）
  }fghhh
}
