import {CreateVideoDto} from "../dto/create-video.dto";
import {VideoService} from 'src/video/video.service';
import {VideoFeedDto} from "../dto/video-feed.dto";
import {GetVideoDto} from "../dto/get-video.dto";
import {
    BadRequestException,
    Body,
    Controller,
    Get,
    HttpStatus,
    InternalServerErrorException, Param,
    Post,
    Query,
    Res, Response
} from "@nestjs/common";

@Controller('video')
export class VideoController {
    constructor(private readonly videoService: VideoService) { }

    @Post()
    async createVideo(@Res() response, @Body() createVideoDto: CreateVideoDto) {
        createVideoDto.author = response.locals.user;

        try {
            const video = await this.videoService.createVideo(createVideoDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Video has been uploaded successfully', video
            });
        } catch (error) {
            throw new BadRequestException("Error: Video could not be created!");
        }
    }

    @Get()
    async getVideos(@Response() response, @Query() videoFeedDto: VideoFeedDto) {
        try {
            const videos = await this.videoService.getVideoFeed(videoFeedDto);
            return response.status(HttpStatus.OK).json({
                message: 'Videos data found successfully.', videos, pages: {current: videoFeedDto.page || 0},
            });
        } catch (error) {
            throw new InternalServerErrorException("Could not get video feed.");
        }
    }

    @Get(":id")
    async getVideo(@Response() response, @Param() getVideoDto: GetVideoDto) {
        const video = await this.videoService.getVideo(getVideoDto);

        return response.status(HttpStatus.OK).json({
            message: 'Video data found successfully.', video,
        });
    }
}
