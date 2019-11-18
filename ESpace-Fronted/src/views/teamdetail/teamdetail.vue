<style scoped>


</style>
<template>
        <div>
        <Header>
            <Row>
                <Col span="6">
                    <div class="avatar">
                    <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                    </div>
                </Col>
                <Col span="18">
                    <Row>
                        <Col span="6">
                        <div class="teamdetail">
                        <div class="teamname">
                        <div class="labelname">
                            战队名称
                        </div>
                        <div class="namevalue">
                            ANavegeT
                        </div>
                        </div>
                        </div>
                        </Col>
                        <Col span="6">
                        <div class="teamdetail">
                        <div class="teamname">
                        <div class="labelname">
                            战队人数
                        </div>
                        <div class="namevalue">
                            3人
                        </div>
                        </div>
                        </div>
                        </Col>
                        <Col span="6">
                        <div class="teamdetail">
                        <div class="teamname">
                        <div class="labelname">
                            创建时间
                        </div>
                        <div class="namevalue">
                            2019年
                        </div>
                        </div>
                        </div>
                        </Col>
                        <Col span="6">
                        <div class="teamdetail">
                        <div class="teamname">
                        <div class="labelname">
                            战队宣言
                        </div>
                        <div class="namevalue">
                            稳了
                        </div>
                        </div>
                        </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            
            
            
        </Header>
        
        <div class="con">
            <Row>
                <Col span="15">
                <div class="card_head">
                参赛记录
                </div>
                </Col>
                <Col span="9">
                <div class="card_head2">
                技能
                </div>
                </Col>
            </Row>
            <div class="cont">
                <Card >
                    <Table stripe :columns="columns1" :data="data1"></Table>
                </Card>
            </div>
            <div class="card">
                <Card>
                    <p>前端</p>
                    <br>
                    <p>算法编程</p>
                    <br>
                    <p>数据结构</p>
                    <br>
                    <p>数学建模</p>
                    <br>
                    <p>CTF</p>
                    <br>
                    <p>
                        项目开发
                    </p>
                </Card>
            </div>

        </div>
        </div>
</template>
<style scoped>
    .card_head {
        border-left: 4px solid #0080ff;
        padding-left: 6px;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 20px;
        color: #000;
        text-align: left;
    }
    .card_head2{
        border-left: 4px solid #0080ff;
        padding-left: 6px;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 20px;
        color: #000;
        text-align: left;
    }
    .avatar{
        width: 100px;
        height: 100px;
        margin-top: 10px;
        display: flex;
        overflow: hidden;
    }
    .teamdetail{
        font-weight: bolder;
        color: #fff;
        margin: 14px;
        
    }
    .cont{
        width:500px;
        float: left;
        overflow: hidden;

    }
    .ivu-layout-header{
        padding-left:50px;
    }
    .teamname{
            width: 150px;
            padding: 15px 15px 15px 54px;
            overflow: hidden;
            margin-left: 20px;
            border-right: 1px solid #fff;
    }
    .labelname{
        
    }
   
    .ivu-card{
        width: 100%;
        height: 100%;
    }
    .con{
         margin-top: 30px;
          
        padding: 25px;
        background: '#fff';
        border: 1px solid #dcdee2;
        margin: 40px;
        height: 100%;
        overflow: hidden;
    }
 
    .card{
        width: 300px;
        height: 325px;
        margin-left: 50px;
        float:left;
        overflow: hidden;

    }
   .ivu-avatar{
       width: 80px;
       height: 80px;
       
   }
    
   
    .ivu-table-wrapper{
        padding: 0px;
        width: 470px;
        height: 100%;
    }
    .ivu-layout-header{
        margin-top: 40px;
        width: 92%;
        margin-left: 40px;
        background: #6495ed;  /* fallback for old browsers */

        height: 100px;
        border-radius: 3px;
        line-height: 20px;
       overflow: hidden;
       display: flex;
    }
    
</style>
<script>
    export default {
        name: "Teamdetail",
        data () {
            return {
                columns1: [
                    {
                        title: '竞赛名称',
                        key: 'name'
                    },
                    {
                        title: '获奖等级',
                        key: 'age'
                    },
                    {
                        title: '颁奖机构',
                        key: 'address'
                    },
                    {
                        title:'获奖时间',
                        key:'date'
                    }
                ],
                data1: [
                    {
                        name: '美国大学生数学建模竞赛',
                        age: '二等奖',
                        address: 'the Consortium for Mathematics and Its Applications',
                        date: '2016-10-03'
                    },
                    {
                        name: '发现杯大奖赛',
                        age: '二等奖',
                        address: '工业和信息化教育与考试中心',
                        date: '2016-10-03'
                    },
                    {
                        name: '全国大学生信息安全竞赛',
                        age: '一等奖',
                        address: '教育部高等学校信息安全专业教学指导委员会',
                        date: '2016-10-03'
                    },
                   
                    
                ]
            }
        }
    }
</script>