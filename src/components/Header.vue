<template>
    <header>
            <h1>Travel Blog</h1>
            <nav class="nav-menu">
                <template v-if="toggleMenu">
                    <div>
                        <ul class="nav-items">
                    <li class="nav-link">
                        <a href="">Home</a>
                    </li>
                    <li class="nav-link">
                        <a href="">About</a>
                    </li>
                    <li class="nav-link">
                        <a href="">Countries</a>
                    </li>
                    <li class="nav-link">
                        <a href="">Contact</a>
                    </li>
                </ul>
                    </div>
                </template>
                <template v-else>
                    <div>
                        
                    </div>
                </template>
                <button @click="toggleMenu = !toggleMenu">
                    Click here
                </button>
            </nav>
    </header>
</template>
<script>
export default {
    data() {
        return {
            toggleMenu: false
        }
    }
}
</script>
<style>
    header {
        width: 100%;
        height: 8vh;
        padding: 3rem;
        background-color: #18a2a9;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
    }
    
    a {
        color: white;
        text-decoration: none;
    }

    h1 {
        font-size: 2rem;
    }

    .nav-items {
        display: flex;
        flex-wrap: wrap;
    }

    .nav-link {
        margin:1rem;
        padding: 1.1rem;
        font-size: 1rem;
        border-radius: 5%;
        transition: background-color .3s ease-in-out;
    }

    .nav-link:hover {
        background-color: #0b5154;
    }
</style>