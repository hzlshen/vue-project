<template>
    <div class="tree-view">
        <!--<div :class="{bold: isFolder}"-->
             <!--@dblclick="changeType" v-for="(model,index) in tree">-->
          <!--{{ model.name }}-->
          <!--<span v-if="model.isFolder"  @click="toggle">[{{ open ? '-' : '+' }}]</span>-->
        <!--</div>-->
      <!--<ul v-show="open" v-if="isFolder">-->
        <!--<treeView-->
          <!--class="item"-->
          <!--v-for="(model, index) in model[0].children"-->
          <!--:key="index"-->
          <!--:model="tree"-->
          <!--@click="addColor(index)">-->
        <!--</treeView>-->
        <!--<li class="add" @click="addChild">+</li>-->
      <!--</ul>-->
      <li v-for="(item,index) in model">
        <div :class="{bold: isFolder}"
             @dblclick="changeType">
          {{ item.name }}
          <span v-if="isFolder"  @click="toggle">[{{ open ? '-' : '+' }}]</span>
        </div>
        <ul v-show="open" v-if="isFolder">
          <treeView
            class="item"
            v-for="(model,index) in model.children"
            :key="index"
            :model="model">
          </treeView>
          <li class="add" @click="addChild">+</li>
        </ul>
      </li>



    </div>
</template>

<script type="text/x-template" id="item-template">

</script>
<script>
    export default {
        name: 'treeView',
        props: {
          model: Array
//          tree: Object
        },
        data () {
            return {
              treeData: {},
              open: false,
              selectInd: Number,
            }
        },
        computed: {
//          isFolder: function () {
//            return this.tree.children &&
//              this.tree.children.length
//          }
          isFolder: function () {
            return this.model.children &&
              this.model.children.length
          }
        },
        mounted (){
//          this.isFolder()
        },
        methods: {
//          isFolder(){
//            for(let i=0;i<this.tree.length;i++) {
//              let flag =  this.tree[i].children && this.tree[i].children.length;
//              console.log(flag);
//              if(typeof this.tree[i].isFolder === 'undefined'){
//                this.$set(this.tree[i],'isFolder',flag)
//              }
//            }
//          },
//          toggle: function () {
//            if (this.isFolder) {
//              this.open = !this.open
//            }
//          },
//          changeType: function () {
//            if (!this.isFolder) {
//              this.$set(this.model, 'children', [])
//              this.addChild()
//              this.open = true
//            }
//          },
//          addChild: function () {
//            this.model.children.push({
//              name: 'new stuff'
//            })
//          },
//          addColor(index){
//
//          }
          toggle: function () {
            if (this.isFolder) {
              this.open = !this.open
            }
          },
          changeType: function () {
            if (!this.isFolder) {
              this.$set(this.model, 'children', [])
              this.addChild()
              this.open = true
            }
          },
          addChild: function () {
            this.model.children.push({
              name: 'new stuff'
            })
          }
        }
    }

</script>
<style scoped>
  body {
    font-family: Menlo, Consolas, monospace;
    color: #444;
  }
  .item {
    cursor: pointer;
  }
  ul {
    line-height: 1.5em;
    list-style-type: dot;
  }
  .item div{
    padding-left: 3em;

  }
  .treeBox .bold{
    font-weight: bold;
    padding: 6px 0 6px 1.5rem;
  }
  ul .item{
    padding: 5px 0;
  }
  .bg_blue{
    background: #409EFF;
  }
</style>
