package main

import (
	"log"

	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	gin.SetMode(gin.ReleaseMode)

	router := gin.Default()

	router.Use(static.Serve("/", static.LocalFile("./dist", true)))

	router.NoRoute(func(c *gin.Context) {
		c.File("./dist/index.html")
	})

	log.Println("go-gin server has started...")

	router.Run("0.0.0.0:80")
}
