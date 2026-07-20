import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from './schemas/course.schema';

@Injectable()
export class CourseService {
  constructor(@InjectModel(Course.name) private courseModel: Model<Course>) {}
  async createCourse(createCourseDto: CreateCourseDto) {
    try {
      const course = await this.courseModel.create(createCourseDto);
      return {
        success: true,
        message: 'Course created successfully',
        data: course,
      };
    } catch (error) {
      const err = error as Error;
      if (err.name === 'ValidationError') {
        throw new BadRequestException({
          success: false,
          message: 'Validation failed',
          error: err.message,
        });
      }
      throw new InternalServerErrorException({
        success: false,
        message: 'Failed to create course',
        error: err.message,
      });
    }
  }

  async findAll() {
    try {
      const courses = await this.courseModel.find().exec();
      return {
        success: true,
        message: 'Courses fetched successfully',
        data: courses,
      };
    } catch (error) {
      const err = error as Error;
      throw new InternalServerErrorException({
        success: false,
        message: 'Failed to fetch courses',
        error: err.message,
      });
    }
  }

  async findOne(id: string) {
    try {
      const course = await this.courseModel.findById(id).exec();
      if (!course) {
        throw new BadRequestException({
          success: false,
          message: 'Course not found',
        });
      }
      return {
        success: true,
        message: 'Course fetched successfully',
        data: course,
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      const err = error as Error;
      throw new InternalServerErrorException({
        success: false,
        message: 'Failed to fetch course',
        error: err.message,
      });
    }
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    try {
      const course = await this.courseModel
        .findByIdAndUpdate(id, updateCourseDto, { new: true })
        .exec();
      if (!course) {
        throw new BadRequestException({
          success: false,
          message: 'Course not found',
        });
      }
      return {
        success: true,
        message: 'Course updated successfully',
        data: course,
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      const err = error as Error;
      throw new InternalServerErrorException({
        success: false,
        message: 'Failed to update course',
        error: err.message,
      });
    }
  }

  async remove(id: string) {
    try {
      const course = await this.courseModel.findByIdAndDelete(id).exec();
      if (!course) {
        throw new BadRequestException({
          success: false,
          message: 'Course not found',
        });
      }
      return {
        success: true,
        message: 'Course deleted successfully',
        data: course,
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      const err = error as Error;
      throw new InternalServerErrorException({
        success: false,
        message: 'Failed to delete course',
        error: err.message,
      });
    }
  }
}
