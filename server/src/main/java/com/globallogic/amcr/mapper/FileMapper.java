package com.globallogic.amcr.mapper;

import com.globallogic.amcr.datasource.DataSource;
import com.globallogic.amcr.model.Attachment;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

@Mapper
public interface FileMapper {
    @Insert("insert into files(file_name, data) values(#{fileName}, #{data})")
    public int save(Attachment attachment);

    @Select("SELECT * FROM file where file_name = #{fileName}")
    public Attachment findByName(String fileName);
}
