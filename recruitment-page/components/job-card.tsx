"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { QrCode, ArrowRight } from "lucide-react"

interface JobCardProps {
  title: string
  id: string
}

export default function JobCard({ title, id }: JobCardProps) {
  const [showQR, setShowQR] = useState(false)

  return (
    <>
      <Card className="group overflow-hidden border-gray-800 bg-gray-950/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
        <CardContent className="p-6">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 text-purple-500">
            <QrCode size={20} />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-sm">我们正在寻找优秀的{title}加入我们的团队，一起创造精彩。</p>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0">
          <Button
            variant="ghost"
            className="w-full justify-between text-purple-400 hover:text-purple-300 hover:bg-purple-950/30"
            onClick={() => setShowQR(true)}
          >
            <span>查看详情</span>
            <ArrowRight size={16} />
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={showQR} onOpenChange={setShowQR}>
        <DialogContent className="bg-gray-900 border-gray-800 text-white">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">{title}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center p-6">
            <div className="bg-white p-4 rounded-lg mb-4">
              {/* 这里使用占位图，实际使用时替换为真实二维码 */}
              <img
                src={`/placeholder.svg?height=200&width=200&text=QR+${id}`}
                alt={`${title}招聘二维码`}
                width={200}
                height={200}
                className="rounded"
              />
            </div>
            <p className="text-sm text-gray-400 text-center">扫描上方二维码，了解岗位详情并投递简历</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
