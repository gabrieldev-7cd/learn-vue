<template>
    <div id="app">
        <h1 class="text-center">Block-Game Page</h1>
        <br/>
        <div class="container">
            <div class="justify-content-center align-items-center row">
                <canvas ref="game" width="640" height="480" style="border: 1px solid black;">

                </canvas>
            </div>
        </div>
    </div> 
</template>

<script>
import io from "socket.io-client";
export default {
    name: "BlockGame",
    data: () => {
        return{
            socket: {},
            context: {},
            position: {
                x: 0,
                y: 0
            }
        }
    },
    created() {
        this.socket = io("http://127.0.0.1:3000");
        console.log("content of socket clause down:::");
        console.log(this.socket);
    },
    mounted() {
        this.context = this.$refs.game.getContext("2d");
        this.socket.on("position", data => {
            this.position = data;
            this.context.clearRect(0, 0, this.$refs.game.width, this.$refs.game.height);
            console.log(this.position.x);
            console.log(this.position.y);
            this.context.fillRect(this.position.x, this.position.y, 20, 20);
        });
    }
}
</script>


<style scoped>

</style>