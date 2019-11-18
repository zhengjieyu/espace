<template>
<div>
    <div class="row1">
        <Row>
         <Input search enter-button placeholder="搜索团队名称" />
        </Row>
        <Row :gutter="16" style="margin-top: 50px;">
            <Col span='8' v-for="(item, index) in list" :key='index'>
                <Card class="card">
                    <div class="top">
                        <p class="title">
                            <Icon type="ios-people" />
                            {{ item.title }}
                        </p>
                        <a href="#" slot="extra">
                            <Button type="info">申请加入</Button>
                        </a>
                    </div>
                    <ul class="content">
                        <li>
                            <span>团队成员：{{ item.teamMember }}</span>
                        </li>
                        <li>
                            {{ item.msg }}
                        </li>
                    </ul>
                    <div class="tag">
                        <Tag color='primary' v-for="(li, index) in item.tag" :key="index">{{ li }}</Tag>
                    </div>
                </Card>
            </Col>
        </Row>      
    </div>
    

</div>
</template>
<style>
    .row1 {
        padding: 0 20px;
    }
    .row1 .ivu-input-wrapper {
        margin-top: 30px;
        width: 40%;
        float: right;
    }
    .row1 .ivu-input-wrapper::after{
        content: '';
        display: block;
        clear: both;
    }
    li{
        list-style: none;
    }
    .tag{
        text-align: right;
    }
    .top{
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eee;
        height: 30px;
        margin-top: 4px;
    }
    .top > .title {
        flex: 1
    }
    .top .ivu-btn {
        height: 20px;
        font-size: 12px;
        padding: 0 12px;
    }

    .ivu-tag {
        height: 6px;
        
        line-height: 18px;
       
        padding: 0;
    }
   
    .ivu-card-body {
        padding: 0px;
    }

    .content {
        padding-top: 20px;
        width: 100%;
        height: 150px;
        overflow: hidden;
    }
    .card {
        margin-bottom: 30px;
    }
</style>
<script>
    export default {
        name: "Team",
        data () {
            return {
                list: [{
                    title: '青山湖水怪',
                    teamMember: '张三、李四',
                    msg: '招募信息：需要一位掌握前端vue框架的队友，一位会有数学建模比赛经验的队友',
                    tag: ['数学建模', '蓝桥杯', '发现杯']
                }, {
                    title: '青山湖水怪',
                    teamMember: '张三、李四',
                    msg: '招募信息：需要一位掌握前端vue框架的队友，一位会有数学建模比赛经验的队友',
                    tag: ['数学建模', '蓝桥杯', '发现杯']
                }, {
                    title: '青山湖水怪',
                    teamMember: '张三、李四',
                    msg: '招募信息：需要一位掌握前端vue框架的队友，一位会有数学建模比赛经验的队友',
                    tag: ['数学建模', '蓝桥杯', '发现杯']
                }, {
                    title: '青山湖水怪',
                    teamMember: '张三、李四',
                    msg: '招募信息：需要一位掌握前端vue框架的队友，一位会有数学建模比赛经验的队友',
                    tag: ['数学建模', '蓝桥杯', '发现杯']
                }, {
                    title: '青山湖水怪',
                    teamMember: '张三、李四',
                    msg: '招募信息：需要一位掌握前端vue框架的队友，一位会有数学建模比赛经验的队友',
                    tag: ['数学建模', '蓝桥杯', '发现杯']
                },{
                    title: '青山湖水怪',
                    teamMember: '张三、李四',
                    msg: '招募信息：需要一位掌握前端vue框架的队友，一位会有数学建模比赛经验的队友',
                    tag: ['数学建模', '蓝桥杯', '发现杯']
                },{
                    title: '青山湖水怪',
                    teamMember: '张三、李四',
                    msg: '招募信息：需要一位掌握前端vue框架的队友，一位会有数学建模比赛经验的队友',
                    tag: ['数学建模', '蓝桥杯', '发现杯']
                }, {
                    title: '青山湖水怪',
                    teamMember: '张三、李四',
                    msg: '招募信息：需要一位掌握前端vue框架的队友，一位会有数学建模比赛经验的队友',
                    tag: ['数学建模', '蓝桥杯', '发现杯']
                }, {
                    title: '青山湖水怪',
                    teamMember: '张三、李四',
                    msg: '招募信息：需要一位掌握前端vue框架的队友，一位会有数学建模比赛经验的队友',
                    tag: ['数学建模', '蓝桥杯', '发现杯']
                }]
            }
        },
        methods: {
            changeLimit () {
                function getArrayItems(arr, num) {
                    const temp_array = [];
                    for (let index in arr) {
                        temp_array.push(arr[index]);
                    }
                    const return_array = [];
                    for (let i = 0; i<num; i++) {
                        if (temp_array.length>0) {
                            const arrIndex = Math.floor(Math.random()*temp_array.length);
                            return_array[i] = temp_array[arrIndex];
                            temp_array.splice(arrIndex, 1);
                        } else {
                            break;
                        }
                    }
                    return return_array;
                }
                this.randomMovieList = getArrayItems(this.movieList, 5);
            }
        },
        mounted () {
            this.changeLimit();
        }
    }
</script>
