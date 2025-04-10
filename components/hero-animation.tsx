"use client"

import { useEffect, useRef } from "react"

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // キャンバスをウィンドウサイズに合わせる
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // パーティクルの設定
    const particlesArray: Particle[] = []
    const numberOfParticles = 100 // パーティクル数を増やす
    const colors = [
      "rgba(16, 185, 129, 0.2)", // エメラルド
      "rgba(6, 182, 212, 0.2)", // シアン
      "rgba(59, 130, 246, 0.2)", // ブルー
      "rgba(16, 185, 129, 0.1)", // 薄いエメラルド
    ]

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
      direction: number
      curve: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 1 // サイズを大きくする
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.opacity = Math.random() * 0.5 + 0.1
        this.direction = Math.random() * 360
        this.curve = Math.random() * 3 - 1.5
      }

      update() {
        // より複雑な動きを追加
        this.direction += this.curve / 10
        this.x += this.speedX + Math.sin(this.direction) * 0.3
        this.y += this.speedY + Math.cos(this.direction) * 0.3

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height

        // サイズを微妙に変化させる
        this.size += Math.random() * 0.2 - 0.1
        if (this.size < 1) this.size = 1
        if (this.size > 7) this.size = 7
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.opacity
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    // パーティクルの初期化
    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle())
      }
    }

    // パーティクルの接続
    const connect = () => {
      const maxDistance = 150 // 接続距離を増やす
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            ctx.strokeStyle = `rgba(16, 185, 129, ${opacity * 0.15})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // 波紋エフェクトの追加
    class Ripple {
      x: number
      y: number
      radius: number
      maxRadius: number
      opacity: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.radius = 1
        this.maxRadius = Math.random() * 100 + 50
        this.opacity = 0.5
      }

      update() {
        this.radius += 1
        this.opacity -= 0.005
      }

      draw() {
        ctx.strokeStyle = `rgba(16, 185, 129, ${this.opacity})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.stroke()
      }

      isFinished() {
        return this.opacity <= 0 || this.radius >= this.maxRadius
      }
    }

    const ripples: Ripple[] = []

    // ランダムに波紋を生成
    const generateRipple = () => {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      ripples.push(new Ripple(x, y))
    }

    // 定期的に波紋を生成
    setInterval(generateRipple, 2000)

    // アニメーションループ
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // グラデーション背景
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(6, 182, 212, 0.05)")
      gradient.addColorStop(1, "rgba(16, 185, 129, 0.05)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // 波紋の描画と更新
      for (let i = 0; i < ripples.length; i++) {
        ripples[i].update()
        ripples[i].draw()

        if (ripples[i].isFinished()) {
          ripples.splice(i, 1)
          i--
        }
      }

      // パーティクルの描画と更新
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }

      connect()
      requestAnimationFrame(animate)
    }

    init()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
