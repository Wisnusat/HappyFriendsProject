"use client"
import React from "react"
import { YearbookModal } from "../YearbookModal"
import { VideoModal } from "../VideoModal"

interface ModalManagerProps {
  // Yearbook modal states
  yearbookModalOpen: boolean
  setYearbookModalOpen: (open: boolean) => void
  yearbookImages: string[]
  yearbookModalIndex: number

  // Photography modal states
  photographyModalOpen: boolean
  setPhotographyModalOpen: (open: boolean) => void
  photographyImages: string[]
  photographyModalIndex: number

  // Video modal states
  videoModalOpen: boolean
  setVideoModalOpen: (open: boolean) => void
  videoFiles: string[]

  // Portfolio modal states
  portfolioLeftTopModalOpen: boolean
  setPortfolioLeftTopModalOpen: (open: boolean) => void
  portfolioLeftTopImages: string[]
  portfolioLeftTopModalIndex: number

  portfolioLeftBottomModalOpen: boolean
  setPortfolioLeftBottomModalOpen: (open: boolean) => void
  portfolioLeftBottomImages: string[]
  portfolioLeftBottomModalIndex: number

  portfolioCenterModalOpen: boolean
  setPortfolioCenterModalOpen: (open: boolean) => void
  portfolioCenterImages: string[]
  portfolioCenterModalIndex: number

  portfolioRightTopModalOpen: boolean
  setPortfolioRightTopModalOpen: (open: boolean) => void
  portfolioRightTopImages: string[]
  portfolioRightTopModalIndex: number

  portfolioRightBottomModalOpen: boolean
  setPortfolioRightBottomModalOpen: (open: boolean) => void
  portfolioRightBottomImages: string[]
  portfolioRightBottomModalIndex: number

  // Full video modal states
  fullVideoModalOpen: boolean
  setFullVideoModalOpen: (open: boolean) => void
  modalVideoSrc: string
}

export function ModalManager({
  yearbookModalOpen,
  setYearbookModalOpen,
  yearbookImages,
  yearbookModalIndex,
  photographyModalOpen,
  setPhotographyModalOpen,
  photographyImages,
  photographyModalIndex,
  videoModalOpen,
  setVideoModalOpen,
  videoFiles,
  portfolioLeftTopModalOpen,
  setPortfolioLeftTopModalOpen,
  portfolioLeftTopImages,
  portfolioLeftTopModalIndex,
  portfolioLeftBottomModalOpen,
  setPortfolioLeftBottomModalOpen,
  portfolioLeftBottomImages,
  portfolioLeftBottomModalIndex,
  portfolioCenterModalOpen,
  setPortfolioCenterModalOpen,
  portfolioCenterImages,
  portfolioCenterModalIndex,
  portfolioRightTopModalOpen,
  setPortfolioRightTopModalOpen,
  portfolioRightTopImages,
  portfolioRightTopModalIndex,
  portfolioRightBottomModalOpen,
  setPortfolioRightBottomModalOpen,
  portfolioRightBottomImages,
  portfolioRightBottomModalIndex,
  fullVideoModalOpen,
  setFullVideoModalOpen,
  modalVideoSrc,
}: ModalManagerProps) {
  return (
    <>
      {/* All Yearbook-Style Modals with adaptive sizing */}
      <YearbookModal
        isOpen={yearbookModalOpen}
        onClose={() => setYearbookModalOpen(false)}
        images={yearbookImages}
        title="Yearbook Design"
        type="image"
        modalSize="wide"
        initialIndex={yearbookModalIndex}
      />

      <YearbookModal
        isOpen={photographyModalOpen}
        onClose={() => setPhotographyModalOpen(false)}
        images={photographyImages}
        title="Photography"
        type="image"
        modalSize="wide"
        initialIndex={photographyModalIndex}
      />

      <YearbookModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        images={videoFiles}
        title="Video Production"
        type="video"
        modalSize="wide"
        initialIndex={0}
      />

      {/* Portfolio Modals with adaptive sizing */}
      <YearbookModal
        isOpen={portfolioLeftTopModalOpen}
        onClose={() => setPortfolioLeftTopModalOpen(false)}
        images={portfolioLeftTopImages}
        title="Portfolio Collection"
        type="image"
        modalSize="wide"
        initialIndex={portfolioLeftTopModalIndex}
      />

      <YearbookModal
        isOpen={portfolioLeftBottomModalOpen}
        onClose={() => setPortfolioLeftBottomModalOpen(false)}
        images={portfolioLeftBottomImages}
        title="Portfolio Collection"
        type="image"
        modalSize="wide"
        initialIndex={portfolioLeftBottomModalIndex}
      />

      <YearbookModal
        isOpen={portfolioCenterModalOpen}
        onClose={() => setPortfolioCenterModalOpen(false)}
        images={portfolioCenterImages}
        title="Featured Portfolio"
        type="image"
        modalSize="tall"
        initialIndex={portfolioCenterModalIndex}
      />

      <YearbookModal
        isOpen={portfolioRightTopModalOpen}
        onClose={() => setPortfolioRightTopModalOpen(false)}
        images={portfolioRightTopImages}
        title="Portfolio Collection"
        type="image"
        modalSize="wide"
        initialIndex={portfolioRightTopModalIndex}
      />

      <YearbookModal
        isOpen={portfolioRightBottomModalOpen}
        onClose={() => setPortfolioRightBottomModalOpen(false)}
        images={portfolioRightBottomImages}
        title="Portfolio Collection"
        type="image"
        modalSize="wide"
        initialIndex={portfolioRightBottomModalIndex}
      />

      {/* Full Video Modal */}
      <VideoModal
        isOpen={fullVideoModalOpen}
        onClose={() => setFullVideoModalOpen(false)}
        videoSrc={modalVideoSrc}
        videoTitle="Video Production"
      />
    </>
  )
}
